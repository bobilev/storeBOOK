package dbwork

import (
	"github.com/bobilev/storeBOOK/dbtypes"
	"log"
	"github.com/lib/pq"
)

func SelectStores(author string) []dbtypes.Store{
	db := dbConnect()
	defer db.Close()

	res, err := db.Query("SELECT id,name,media,author,direction,description,genre,restriction FROM stores WHERE author=$1 ORDER BY id ASC",author)
	checkErr(err)
	var Lists []dbtypes.Store
	for res.Next() {

		var Store dbtypes.Store
		err = res.Scan(&Store.Storeid,&Store.Name,&Store.Media,&Store.Author,&Store.Direction,&Store.Description,pq.Array(&Store.Genre),&Store.Restriction)
		checkErr(err)
		
		Lists = append(Lists,Store)
	}
	return Lists
}
func CreateNewStore(name,direction,description,media string) int{
	db := dbConnect()
	defer db.Close()

	var LastInsertId int
	// insert
	err := db.QueryRow("INSERT INTO stores(name,direction,description,media) values($1,$2,$3,$4) returning id",name,direction,description,media).Scan(&LastInsertId)
	checkErr(err)

	log.Println("{INSERT | Add New Store}",LastInsertId)
	return LastInsertId
}