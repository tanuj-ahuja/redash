import { useCallback } from "react";

export default function useQueryDump(query) {

  const dumpToS3 = useCallback(
    (maxAge=0) => {
      let newQueryResult;
      newQueryResult = query.getQueryResult(maxAge);
      console.log('Dump data to S3......')
      console.log(String(newQueryResult.getStatus()))
    }, []
  );

  return { ...{ dumpToS3 } };

}
