import React, { useCallback } from "react";
import { Button } from "antd";
import * as Modal from "./modals";

const BatchActionsComponent = ({ selectedList, refresh }) => {
  const batchDisabled = selectedList.length === 0;

  const gotoDelete = useCallback(
    () => {
      Modal.batchDeleteUserConfirm(selectedList, refresh);
    },
    [selectedList]
  );

  return (
    <div style={{ marginBottom: "8px" }} className="clearfix">
      <div style={{ float: "left" }}>
        <Button type="primary" icon="reload" onClick={() => refresh()}>
          Refresh
        </Button>
        &nbsp;&nbsp;
        <Button
          type="danger"
          icon="delete"
          disabled={batchDisabled}
          onClick={gotoDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BatchActionsComponent;
