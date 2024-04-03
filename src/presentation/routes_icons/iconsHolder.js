import { BiWorld } from "react-icons/bi";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import {
  FaCheck,
  FaEye,
  FaLock,
  FaMoneyBill,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaAngleDown, FaPeopleGroup } from "react-icons/fa6";
import { GiHamburgerMenu, GiNetworkBars } from "react-icons/gi";
import { IoIosColorPalette, IoIosLogOut, IoIosSettings } from "react-icons/io";
import {
  IoCloseOutline,
  IoPencil,
  IoPerson,
  IoRadioButtonOffSharp,
} from "react-icons/io5";
import { LuClock, LuNetwork } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { TbCurrencyDollar, TbPackages } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

export const tableIcons = {
  active: FaCheck,
  disable: TiCancel,
  visible: FaEye,
  edit: IoPencil,
  delete: MdDelete,
  manage: LuNetwork,
  track: LuClock,
  person: IoPerson,
  locked: FaLock,
  forward: FaRegArrowAltCircleRight,
  sidebar: BsLayoutSidebarInsetReverse,
  bars: GiHamburgerMenu,
  logout: IoIosLogOut,
  dashboard: IoIosColorPalette,
  circle: IoRadioButtonOffSharp,
  angleDown: FaAngleDown,
  close: IoCloseOutline,
  network: GiNetworkBars,
  setting: IoIosSettings,
  people: FaPeopleGroup,
  money: FaMoneyBill,
  category: LuNetwork,
  package: TbPackages,
  world: BiWorld,
  dollar: TbCurrencyDollar,
};

export const active = {
  key: "active",
  icon: tableIcons.active,
  type: "button",
  tooltip: "Activate",
  handler: () => {},
  colors: {
    light: "!bg-green-600",
    dark: "hover:bg-green-900",
  },
};
export const disable = {
  key: "disable",
  icon: tableIcons.disable,
  type: "button",
  tooltip: "Deactivate",
  handler: () => {},
  colors: {
    light: "!bg-red-700",
    dark: "hover:bg-red-900",
  },
};

export const visible = {
  key: "visible",
  icon: tableIcons.visible,
  type: "button",
  tooltip: "View",
  handler: () => {},
  colors: {
    light: "bg-primary",
    dark: "hover:bg-orange-900",
  },
};

export const edit = {
  key: "edit",
  icon: tableIcons.edit,
  type: "link",
  tooltip: "Edit",
  link: "",
  colors: {
    light: "bg-primary",
    dark: "hover:bg-orange-900",
  },
};

export const deleteIcon = {
  key: "delete",
  icon: tableIcons.delete,
  type: "button",
  tooltip: "Delete",
  handler: () => {},
  colors: {
    light: "bg-red-700",
    dark: "hover:bg-red-900",
  },
};

export const manage = {
  key: "manage",
  icon: tableIcons.manage,
  type: "button",
  tooltip: "Manage",
  handler: () => {},
  colors: {
    light: "bg-blue-600",
    dark: "hover:bg-blue-900",
  },
};

export const track = {
  key: "track",
  icon: tableIcons.track,
  type: "button",
  tooltip: "Track",
  handler: () => {},
  colors: {
    light: "bg-yellow-700",
    dark: "hover:bg-yellow-900",
  },
};
