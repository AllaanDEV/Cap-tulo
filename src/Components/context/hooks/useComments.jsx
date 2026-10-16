
// import { useEffect, useState } from "react";

import { useState } from "react";

export function useComments() {
  const [comments, setComments] = useState(false);
  const [editComments, setEditComments] = useState(false);

  return { comments, setComments, editComments, setEditComments };
}
