import { getIssueList } from "../api/gitApi";
import React, { useState, useCallback, useEffect } from "react";

const IssueList = () => {
    const [issuesListData, setIssuesListData] = useState([]);
    const [refetchData, setRefetchData] = useState(true);

    const fetchIssues = useCallback(
        async () => {
            const issuesRes = await getIssueList();
            setIssuesListData(issuesRes.rows);
            setRefetchData(false);
        }, [setIssuesListData]
    );
    useEffect(() => {
        refetchData && fetchIssues();
    }, [refetchData, fetchIssues]);


    return (
        <div>
            <h3>works till now?</h3>
            <div>{issuesListData}</div>
        </div>
    );
};

export default IssueList;