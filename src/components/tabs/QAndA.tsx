import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "../accordion";
import Typography from "@material-ui/core/Typography";
import { Button } from "../buttons";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { usePlayer } from "../../utils/usePlayer";
import { timeStringFromSeconds } from "../../utils/formatTime";
import { useStore } from "../../store/useStore";
import { getHighlightedText } from "../../utils/getHighlightedText";

export type InterviewEntry = { time: number; question: string; answer: string };

interface QAndAProps {
  data: InterviewEntry[];
}

export const QAndA = ({ data }: QAndAProps) => {
  const { seekTo } = usePlayer();
  const { filterBySearch, searchTerm } = useStore();

  const handleButtonClick = (event: React.MouseEvent, time: number) => {
    event.stopPropagation();
    seekTo(time);
  };

  return (
    <>
      {filterBySearch(data).map((block) => (
        <Accordion>
          <AccordionSummary>
            <Typography>
              {getHighlightedText(block.question, searchTerm)}
            </Typography>
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
            <Typography>
              {getHighlightedText(block.answer, searchTerm)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
