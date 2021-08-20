import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "../accordion";
import Typography from "@material-ui/core/Typography";
import { Button } from "../buttons";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { timeStringFromSeconds } from "../../utils/formatTime";
import { useStore } from "../../store/useStore";
import { getHighlightedText } from "../../utils/getHighlightedText";

export type InterviewEntry = { time: number; question: string; answer: string };

interface QAndAProps {
  data: { videoId: string; qanda: InterviewEntry[] };
}

export const QAndA = ({ data }: QAndAProps) => {
  const { filterBySearch, searchTerm, playVideoAt } = useStore();

  const handleButtonClick = (
    event: React.MouseEvent,
    videoId: string,
    time: number
  ) => {
    event.stopPropagation();
    playVideoAt(videoId, time);
  };

  return (
    <>
      {filterBySearch(data.qanda).map((block) => (
        <Accordion>
          <AccordionSummary>
            <Typography>
              {getHighlightedText(block.question, searchTerm)}
            </Typography>
            <Button
              startIcon={<PlayCircleFilledIcon />}
              size="small"
              onClick={(event: React.MouseEvent) =>
                handleButtonClick(event, data.videoId, block.time)
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
