import Link from "next/link";

export const menuItems = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
  },
  {
    label: "Courses",
    key: "SubMenu",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href="/courses">বি.সি.এস</Link>,
            children: [
              {
                key: "ভাইভা",
                label: <Link href="/courses">ভাইভা</Link>,
              },
              {
                key: "লিখিত",
                label: <Link href="/courses">লিখিত</Link>,
              },
            ],
          },
          {
            key: "bank",
            label: <Link href="/courses">ব্যাংক</Link>,
          },
          {
            key: "primary",
            label: <Link href="/courses">প্রাইমারি</Link>,
          },
          {
            key: "ntrca",
            label: <Link href="/courses">এন.টি.আর.সি.এ</Link>,
          },
        ],
      },
    ],
  },
  {
    label: <Link href="/books">Books</Link>,
    key: "books",
  },

  {
    label: <Link href="/">Log In</Link>,
    key: "login",
  },
];
