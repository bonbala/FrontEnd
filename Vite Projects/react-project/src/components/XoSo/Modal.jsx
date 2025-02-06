import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Field } from "../ui/field";

const Modal = (props) => {
  const { setPlayer, winerList,setWinerList } = props;
  const [playerName, setPlayerName] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorInput, setErrorInput] = useState({
    errorName: "",
    errorNumber: "",
    invalidName: false,
    invalidNumber: false,
  });
  console.log(winerList)
  
  const validate = (name, number) => {
    const nameRegex = /^[a-zA-Z\s-áàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/;
    let errors = { errorName: "", errorNumber: "", invalidName: false, invalidNumber: false };
    let isValid = true;

    if (!name) {
      errors.errorName = "Vui lòng nhập tên người chơi.";
      errors.invalidName = true;
      isValid = false;
    } else if (!nameRegex.test(name)) {
      errors.errorName = "Tên không được chứa số hoặc ký tự đặc biệt.";
      errors.invalidName = true;
      isValid = false;
    }

    if (!number) {
      errors.errorNumber = "Vui lòng nhập con số may mắn.";
      errors.invalidNumber = true;
      isValid = false;
    } else if (parseInt(number, 10) <= 0) {
      errors.errorNumber = "Con số may mắn phải là số dương.";
      errors.invalidNumber = true;
      isValid = false;
    }

    setErrorInput(errors);
    return isValid;
  };

  

  const handleSave = () => {
    if (!validate(playerName, luckyNumber)) return;

    const user = {
      name: playerName,
      number: luckyNumber,
    };
    const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    const updatedPlayers = [...storedPlayers, user];

    localStorage.setItem("players", JSON.stringify(updatedPlayers));
    setPlayer(updatedPlayers);
    setIsOpen(false);

    setPlayerName("");
    setLuckyNumber("");
    setErrorInput({
      errorName: "",
      errorNumber: "",
      invalidName: false,
      invalidNumber: false,
    });
  };

  return (
    <div>
      <DialogRoot open={isOpen}>
        <DialogTrigger asChild>
          {winerList && winerList.length>0 ? <Button variant="outline" size="sm" onClick={() => setWinerList([])}>
            Chơi lại
          </Button> : <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
            Thêm người chơi
          </Button>}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm Người chơi</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Field
              label="Tên người chơi"
              invalid={errorInput.invalidName}
              errorText={errorInput.errorName}
            >
              <Input
                placeholder="Tên người chơi"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </Field>
            <Field
              label="Con số may mắn"
              invalid={errorInput.invalidNumber}
              errorText={errorInput.errorNumber}
            >
              <Input
                placeholder="Con số may mắn"
                mt="20px"
                value={luckyNumber}
                onChange={(e) => setLuckyNumber(e.target.value)}
                type="number"
              />
            </Field>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button onClick={() => setIsOpen(false)} variant="outline">
                Hủy
              </Button>
            </DialogActionTrigger>
            <Button variant="outline" onClick={handleSave}>
              Lưu
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </div>
  );
};

export default Modal;
