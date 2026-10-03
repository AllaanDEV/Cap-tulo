import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const UserSuggestions = forwardRef((props, ref) => {
  const { items, command } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const selectUser = (index) => {
    const user = items[index];

    if (!user) return;

    command({
      id: user.id,
      label: user.name,
    });
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        setSelectedIndex(
          (selectedIndex + items.length - 1) % items.length
        );

        return true;
      }

      if (event.key === "ArrowDown") {
        setSelectedIndex(
          (selectedIndex + 1) % items.length
        );

        return true;
      }

      if (event.key === "Enter") {
        selectUser(selectedIndex);

        return true;
      }

      return false;
    },
  }));

  return (
    <div className="bg-background border border-border rounded-xl shadow-lg p-1 min-w-48">
      {items.length > 0 ? (
        items.map((user, index) => (
          <button
            key={user.id}
            type="button"
            onClick={() => selectUser(index)}
            className={`w-full text-left px-3 py-2 rounded-lg ${
              index === selectedIndex
                ? "bg-black/10"
                : ""
            }`}
          >
            @{user.userName}
          </button>
        ))
      ) : (
        <span className="px-3 py-2 text-black/40">
          Nenhum usuário encontrado
        </span>
      )}
    </div>
  );
});