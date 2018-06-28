package dbtypes

type Step struct {
	Id int
	StoreId int
	StepId string
	Text string
	Media int
	Answers []Answer
	TypeDoc string
	AccessKey string
}
type Answer struct {
	NextStep string
	Text string
}