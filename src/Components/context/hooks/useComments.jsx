import { useState } from "react";

export function useComments() {
  const [comment, setComment] = useState({});

    // const [comments, setComments] = useState(false);
    // const [editComments, setEditComments] = useState(false);
  
    // const [idComment, setIdComment] = useState(null);

    // const dialogRef = useRef(null);
  
    // useEffect(() => {
    //   if (editComments) {
    //     dialogRef.current.showModal();
    //   } else {
    //     dialogRef.current.close();
    //   }
    // }, [editComments]);
  
    // const toggleComments = (c) => {
    //   if (c == 1) {
    //     setComments(!comments);
    //   } else if (c == 2) {
    //     setEditComments(!editComments);
    //     console.log(editComments);
    //   }
    // };

  return { comment, setComment};
}
