import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";
import {
  dialogContentTye,
  getDialogContent,
  getDialogState,
  getDialogTitle,
  toggleDialog,
} from "../../service/features/navigation_slice";
import ProfileDialog from "../dialogs/ProfileDialog";
import TableDialog from "../dialogs/TableDialog";

export function DialogDefault() {
  const dispatch = useDispatch();
  const openDialog = useSelector(getDialogState);
  const dialogContent = useSelector(getDialogContent);
  const dialogTitle = useSelector(getDialogTitle);

  const handleOpen = () => dispatch(toggleDialog());
  let display;
  if (dialogContent.type == dialogContentTye.table) {
    display = (
      <TableDialog
        tableHeaders={dialogContent.data.tableHeaders}
        data={dialogContent.data.content}
      />
    );
  }
  if (dialogContent.type == dialogContentTye.profile) {
    display = (
      <ProfileDialog
        tableHeaders={dialogContent.data.tableHeaders}
        data={dialogContent.data.content}
      />
    );
  }

  return (
    <Dialog open={openDialog} handler={handleOpen}>
      <DialogHeader className="text-[2rem] bg-primary py-3 relative">
        {dialogTitle}
        <tableIcons.close
          className="absolute right-5 top-5 text-[3rem]"
          onClick={() => {
            dispatch(toggleDialog());
          }}
        />
      </DialogHeader>
      <DialogBody className="px-5 py-4">{display}</DialogBody>
    </Dialog>
  );
}
