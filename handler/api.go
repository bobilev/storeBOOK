package handler

import (
	"net/http"
	"encoding/json"
	"fmt"
	"github.com/bobilev/storeBOOK/dbwork"
)

func API(w http.ResponseWriter, r *http.Request) {
	class := r.URL.Query().Get("class")
	method := r.URL.Query().Get("method")
	fmt.Println("1",class)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	switch class {
	case "account":
		switch method {
		case "getinfo":
			//user := r.URL.Query().Get("user")
			json.NewEncoder(w).Encode("account")
			w.WriteHeader(200)
		}
	case "store":
		switch method {
		case "getstoresuser":
			user := r.URL.Query().Get("user")
			fmt.Println("2",user)
			res := dbwork.SelectStores(user)
			json.NewEncoder(w).Encode(res)
			w.WriteHeader(200)
		case "addstore":

		}


	case "step":
		switch method {
		case "getsteps":
			StoreId := r.URL.Query().Get("storeid")
			fmt.Println("3",StoreId)
			res := dbwork.SelectSteps(StoreId)
			json.NewEncoder(w).Encode(res)
			w.WriteHeader(200)
		}


	}
}