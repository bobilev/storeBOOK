package dbtypes

type Store struct {
	StoreId int
	Name string
	Media int
	Author string
	Direction string
	Description string
	Genre []string
	Restriction string
}