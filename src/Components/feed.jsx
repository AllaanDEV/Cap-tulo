import { ArrayPost } from "./ComponentesFeed/arrayPost";
import { Container } from "./ComponentesFeed/container";

import { SubHeader } from "./ComponentesFeed/subHeader";
import { Dialog } from "./ComponentesFeed/dialog";
import { DialogComments } from "./ComponentesFeed/dialogComments";
import { Buttons } from "./ComponentesFeed/buttons";
import { DialogGif } from "./ComponentesFeed/dialogGif";

export function Feed() {
  return (
    <Container className="w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
      <Buttons />
      <SubHeader />
      <ArrayPost />
      <Dialog />
      <DialogComments />
      <DialogGif></DialogGif>
    </Container>
  );
}
