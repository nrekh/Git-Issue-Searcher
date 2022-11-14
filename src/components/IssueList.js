import {getIssueList} from "../api/gitApi";
import React,{useState, useCallback, useEffect} from "react";

const IssueList = () =>{
    const [issuesListData, setIssuesListData] = useState([]);
    const [refetchData, setRefetchData] = useState(true);
return (
    <div>works till now?</div>
)
};

export default IssueList;