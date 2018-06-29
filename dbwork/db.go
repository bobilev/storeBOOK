package dbwork

import (
	_ "github.com/lib/pq"
	"database/sql"
	"os"
	"log"
)

func dbConnect() *sql.DB{
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL_CHATBOOK"))
	checkErr(err,"dbConnect")
	return db
}
func checkErr(err error,nameMethod string) {
	if err != nil {
		log.Println(nameMethod,"===========[Err]========\n",err)
	}
}