import {Button, Input, Modal} from "antd";
import {useState} from "react";

interface IActionModalProps {
    title: string;
    onSave: (price: number, count: number) => void;
    onClose: () => void;
}

const ActionModal = (props: IActionModalProps) => {
    const { onSave, title, onClose } = props;

    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <Modal onCancel={onClose} open={true} title={title} footer={[
            <Button disabled={!price || !count} onClick={() => onSave(price, count)}>Save</Button>
        ]}>
            Price
            <Input value={price} onChange={(e) => setPrice(Number(e.target.value) || 0)} />
            Count
            <Input value={count} onChange={(e) => setCount(Number(e.target.value) || 0)} />
        </Modal>
    );
};

export default ActionModal;