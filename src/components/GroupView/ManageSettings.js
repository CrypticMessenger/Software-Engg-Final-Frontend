import React, { useEffect } from "react";

/**
 * Group Settings page that is used to set various properties of group like public private, or custom roles etc.
 * @return {React.Component} GroupSettings
 * @example
 * return <GroupSettings />
 */
export default function GroupSettings() {
  useEffect(() => {
    document.title = "group settings";
  }, []);
  return <div>GroupSettings</div>;
}
