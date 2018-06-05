package dbwork

import "github.com/bobilev/storeBOOK/dbtypes"

func SelectStores(author string) []dbtypes.Store{
	db := dbConnect()
	defer db.Close()

	res, err := db.Query("SELECT id,name,media FROM stores WHERE author=$1 ORDER BY id ASC",author)
	checkErr(err)
	var Lists []dbtypes.Store
	for res.Next() {
		var storeid int
		var name string
		var media int

		var Store dbtypes.Store
		err = res.Scan(&storeid,&name,&media)
		checkErr(err)

		Store.Storeid = storeid
		Store.Name = name
		Store.Media = media

		Lists = append(Lists,Store)
	}
	return Lists
}