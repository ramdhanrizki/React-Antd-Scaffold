import { useMemo } from "react";
import { useIntl } from "react-intl";

export default function useData() {
  const { formatMessage } = useIntl();
  const sidebarData = useMemo(() => [
    {
      icon: "home",
      key: "dashboard",
      label: formatMessage({ id: "Dashboard" }),
      url: "/home/dashboard",
    },
    {
      icon: "table",
      key: "table",
      label: "Contoh Table",
      url: "/home/users",
    },
    {
      icon: "file",
      key: "file",
      label: "Upload File",
      url: "/home/pkgs",
    },
    {
      icon: "area-chart",
      key: "sub-res",
      label: "Multiple Menu",
      children: [
        {
          key: "users",
          label: "Secondary Level 1",
          url: "/home/users",
        },
        {
          key: "hms",
          label: "Secondary Level 2",
          url: "/home/hms",
        },
        {
          key: "mm",
          label: "Secondary Level 3",
          url: "/home/mm",
        },
      ],
    },
    {
      icon: "setting",
      key: "setting",
      label: formatMessage({ id: "Setting" }),
      url: "/home/setting",
    },
  ]);

  return sidebarData;
}
