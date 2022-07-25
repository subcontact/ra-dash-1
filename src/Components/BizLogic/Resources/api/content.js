const items = {
  root: { id: "diid:root-my", name: "Root", itemtype: "rootfolder" },
  foo: { id: "diid:foo", name: "Foo", itemtype: "document" },
  bar: { id: "diid:bar", name: "Bar", itemtype: "document" },
  baz: { id: "diid:baz", name: "Baz", itemtype: "document" },
  qux: { id: "diid:qux", name: "Qux", itemtype: "document" }
};

export function getChildren(itemId) {
  return new Promise((resolve, reject) => {
    const children =
      itemId === "diid:root-my"
        ? [items.foo, items.bar]
        : itemId === "diid:root-foo"
        ? [items.baz, items.qux]
        : [];
    setTimeout(() => resolve(children), 1000);
  });
}

export function getRoot(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(items.roo), 1000);
  });
}
