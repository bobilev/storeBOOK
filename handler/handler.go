package handler

import (
	"net/http"
	"html/template"
)

func TMPIndex(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("tmp/index.html")
	t.Execute(w, nil)
}