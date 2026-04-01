"use client";

export default function DateTime(props: { value: Date | string | number }) {
  const date = new Date(props.value);
  return <time dateTime={date.toISOString()}>{date.toLocaleString()}</time>;
}
