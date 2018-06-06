package dbtypes

type Store struct {
	Storeid int
	Name string
	Media int
	Author string
	Direction string
	Description string
	Genre []string
	Restriction string
}