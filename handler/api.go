package handler

import (
	"net/http"
	"encoding/json"
	"fmt"
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
		json.NewEncoder(w).Encode("store")
		w.WriteHeader(200)
	case "step":
		json.NewEncoder(w).Encode("step")
		w.WriteHeader(200)

	}
}