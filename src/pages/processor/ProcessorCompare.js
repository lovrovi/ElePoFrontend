import { Box, CircularProgress, Divider, Stack } from '@mui/material';
import ProcessorComparisonDetails from 'components/ProcessorComparisonDetails/ProcessorComparisonDetails';
import SelectProcessor from 'components/SelectProcessor/SelectProcessor';
import { useGetProcessor } from 'lib/api/processors/useGetProcessor';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProcessorCompare = () => {
  let [searchParams] = useSearchParams();

  const {
    data: leftProcessor,
    isLoading: isLoadingLeft,
    isFetched: isFetchedLeft,
  } = useGetProcessor(searchParams.get('leftId'));

  const { data: rightProcessor, isFetched: isFetchedRight } = useGetProcessor(
    searchParams.get('rightId')
  );

  if (isLoadingLeft)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Stack direction="row" spacing={4}>
      <ProcessorComparisonDetails
        processor={leftProcessor}
        isFetched={isFetchedLeft}
      />
      <Divider flexItem orientation="vertical" sx={{ pl: 4 }} />
      {!searchParams.get('rightId') && !isFetchedRight ? (
        <SelectProcessor currentProcessorId={leftProcessor.id} />
      ) : (
        <ProcessorComparisonDetails
          processor={rightProcessor}
          isFetched={isFetchedRight}
        />
      )}
    </Stack>
  );
};

export default ProcessorCompare;
