import {Button} from "antd";
import {useState} from "react";
import ActionModal from "./ActionModal";
import {orderStore} from "../store/order";

interface IBuyButtonProps {
    id: number;
}

export const BuyButton = (props: IBuyButtonProps) => {
    const { id } = props;

    const [isOpenedModal, setIsOpenedModal] = useState(false);

    const buy = orderStore.useBuyStocks();

    const handleSave = (price: number, count: number) => {
        buy.mutate({id, price, count});
    };

    return (
        <>
            <Button onClick={() => setIsOpenedModal(true)}>Buy</Button>
            {isOpenedModal && (
                <ActionModal
                    title={'Buy stocks'}
                    onSave={handleSave}
                    onClose={() => setIsOpenedModal(false)}
                />
            )}
        </>
    );
};