import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "../accordion";
import Typography from "@material-ui/core/Typography";
import { Button } from "../buttons";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { usePlayer } from "../../utils/usePlayer";
import { timeStringFromSeconds } from "../../utils/formatTime";

interface QAndAProps {
  data: { time: number; question: string; answer: string }[];
}

export const QAndA = ({ data }: QAndAProps) => {
  const { seekTo } = usePlayer();

  const handleButtonClick = (event: React.MouseEvent, time: number) => {
    event.stopPropagation();
    seekTo(time);
  };

  return (
    <>
      {data.map((block) => (
        <Accordion>
          <AccordionSummary>
            <Typography>{block.question}</Typography>
            <Button
              startIcon={<PlayCircleFilledIcon />}
              size="small"
              onClick={(event: React.MouseEvent) =>
                handleButtonClick(event, block.time)
              }
            >
              {timeStringFromSeconds(block.time)}
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{block.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
