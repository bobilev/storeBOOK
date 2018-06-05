package handler

import (
	"net/http"
	"encoding/json"
	"fmt"
	"github.com/bobilev/storeBOOK/dbwork"
)

func API(w http.ResponseWriter, r *http.Request) {
	method := r.URL.Query().Get("method")

	fmt.Println("1",method)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	switch method {
	case "account":
		//date := r.URL.Query().Get("date")
		json.NewEncoder(w).Encode("account")
		w.WriteHeader(200)
	case "store":
		user := r.URL.Query().Get("getstoresuser")
		fmt.Println("2",user)
		res := dbwork.SelectStores(user)
		json.NewEncoder(w).Encode(res)
		w.WriteHeader(200)
	case "step":
		StoreId := r.URL.Query().Get("getsteps")
		fmt.Println("3",StoreId)
		res := dbwork.SelectSteps(StoreId)
		json.NewEncoder(w).Encode(res)
		w.WriteHeader(200)

	}
}