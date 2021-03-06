package dbwork

import (
	"github.com/bobilev/storeBOOK/dbtypes"
	"log"
	"github.com/lib/pq"
	"fmt"
	"strconv"
)

func SelectStores(author string) []dbtypes.Store{
	db := dbConnect()
	defer db.Close()

	res, err := db.Query("SELECT id,name,media,author,direction,description,genre,restriction FROM stores WHERE author=$1 ORDER BY id ASC",author)
	checkErr(err,"SelectStores(select)")
	var Lists []dbtypes.Store
	for res.Next() {

		var Store dbtypes.Store
		err = res.Scan(&Store.StoreId,&Store.Name,&Store.Media,&Store.Author,&Store.Direction,&Store.Description,pq.Array(&Store.Genre),&Store.Restriction)
		checkErr(err,"SelectStores(scan)")

		Lists = append(Lists,Store)
	}
	return Lists
}
func CreateNewStore(name,media,author,direction,description string) int{
	db := dbConnect()
	defer db.Close()

	var LastInsertId int
	// insert
	err := db.QueryRow("INSERT INTO stores(name,media,author,direction,description) values($1,$2,$3,$4,$5) returning id",name,media,author,direction,description).Scan(&LastInsertId)
	checkErr(err,"CreateNewStore(INSERT stores)")
	log.Println("{INSERT | Add New Store}",LastInsertId)
	if LastInsertId != 0 {
		err1 := db.QueryRow("INSERT INTO steps(storeid,stepid,text,answer,typedoc,accesskey) values($1,'1','<p><br></p>','{}','','') returning id",LastInsertId).Scan(&LastInsertId)
		checkErr(err1,"CreateNewStore(INSERT steps)")
	}
	return LastInsertId
}
func EditStore(mapParams map[string]string) map[string]string{
	db := dbConnect()
	defer db.Close()

	responsMapUp := make(map[string]string)

	storeid := mapParams["storeid"]
	for key,param := range mapParams {
		if param == "" || key == "storeid" {continue}
		request := "UPDATE stores SET "+key+"=$2 WHERE id=$1"
		stmt, err := db.Prepare(request)
		checkErr(err,"EditStore(UPDATE stores)")

		res, err := stmt.Exec(storeid, param)
		checkErr(err,"EditStore(stmt.Exec)")

		affect, err := res.RowsAffected()//Сколько записей удалось обновить
		checkErr(err,"EditStore(res.RowsAffected)")
		if affect == 0 {
			fmt.Println("[ErrDB: UPDATE] Stores")
		}
		fmt.Println(affect)
		responsMapUp[key] = strconv.Itoa(int(affect))
	}
	return responsMapUp

}