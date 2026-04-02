"use client";

import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParamaters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>

      <FormControl
        id="wd-query-parameter-a"
        className="mb-2"
        defaultValue={a}
        type="number"
        onChange={(e) => setA(Number(e.target.value))}
      />

      <FormControl
        id="wd-query-parameter-b"
        className="mb-2"
        defaultValue={b}
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
      />

      <Button
        id="wd-query-parameter-add"
        className="me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </Button>

      <Button
        id="wd-query-parameter-subtract"
        variant="danger"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </Button>
<Button
  id="wd-query-parameter-multiply"
  className="me-2"
  variant="warning"
  href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
>
  Multiply {a} * {b}
</Button>

<Button
  id="wd-query-parameter-divide"
  variant="success"
  href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
>
  Divide {a} / {b}
</Button>

      <hr />
    </div>
  );
}
