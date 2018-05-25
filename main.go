package main

import (
	"fmt"
	"net/http"
	"github.com/bobilev/storeBOOK/handler"
)

func main() {
	port := "8080"
	//port := os.Getenv("PORT")
	//if port == "" {
	//	log.Fatal("$PORT must be set")
	//}


	//err := dbwork.CreateAllTable()
	//checkErr(err)

	fmt.Println("[server start] port:",port)

	http.HandleFunc("/", handler.TMPIndex)


	http.Handle("/front/", http.StripPrefix("/front/", http.FileServer(http.Dir("./front/"))))
	http.ListenAndServe(":" + port, nil)
}
func checkErr(err error) {
	if err != nil {
		fmt.Println("[err][CreateAllTable]")
		panic(err)
	} else {
		fmt.Println("[good][CreateAllTable]")
	}
}