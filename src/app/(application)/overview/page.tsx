import Item from "@/app/components/item";
import {MOCK_ITEMS} from "@/__mock__/items";

export default function Overview() {
    return (
        <div className="flex flex-wrap">
            {MOCK_ITEMS.map((item) => {
                return (
                    <Item key={item.id} {...item}/>
                );
            })}
        </div>
    );
}
