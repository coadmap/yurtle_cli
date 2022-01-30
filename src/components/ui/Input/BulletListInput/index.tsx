import {useCallback, useEffect, useState, VFC} from "react";

type ContentItem = {
  id?: string;
  value: string;
}
type BulletListInputProps = {
  value?: ContentItem[]
  defaultValue?: ContentItem[];
  onChange?: (value: ContentItem[]) => void;
  onCreate?: (value: string) => void;
  onUpdate?: (id: string, value: string) => void;
};

const BulletListInput: VFC<BulletListInputProps> = ({ value, defaultValue, onChange, onCreate, onUpdate }) => {
  const [items, setItems] = useState(defaultValue ?? []);

  const onPut = useCallback(async (item: ContentItem) => {
    const newItems = [...items];
    if (item.id) {
      const findIdx = items.findIndex(i => i.id === item.id);
      newItems[findIdx] = item;
      onUpdate?.(item.id, item.value);
    } else {
      onCreate?.(item.value);
    }
  }, [onCreate, onUpdate]);

  useEffect(() => {
    if (!value) return;

    setItems(value);
  }, [value]);

  return (
    <div>
      {items.map((item, idx) => (
        <input type="text" value={item.value} key={`${item.value}${idx}`} onKeyPress={async e => {
          e.preventDefault();
          if (e.key === 'Enter') await onPut(item);
        }} />
      ))}
    </div>
  );
};

export default BulletListInput;