import React, { useEffect } from "react";

export default function GroupSettings() {
  useEffect(() => {
    document.title = "group settings";
  }, []);
  return <div data-testid="ManageSettingsTest">GroupSettings</div>;
}
