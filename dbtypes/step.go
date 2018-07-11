package dbtypes

type ArraySavePull struct {
	Response []SavePull `json:"response"`
}
type SavePull struct {
	StepId string `json:"StepId"`
	Index  int64  `json:"Index"`
	Method string `json:"Method"`
	Answer Answer `json:"Answer"`
}

type Step struct {
	Id        int
	StoreId   int
	StepId    string
	Text      string
	Media     int
	Answers   []Answer
	TypeDoc   string
	AccessKey string
}
type Answer struct {
	NextStep string `json:"NextStep"`
	Text     string `json:"Text"`
}