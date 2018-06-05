package dbwork

import (
	_ "github.com/lib/pq"
	"database/sql"
	"os"
	"log"
)

func dbConnect() *sql.DB{
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL_CHATBOOK"))
	checkErr(err)
	return db
}
func checkErr(err error) {
	if err != nil {
		log.Println("===========[Err]========\n",err)
	}
}