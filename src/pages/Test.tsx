import React from 'react';

import DefaultButton from '@components/atoms/DefaultButton';
import LargeButton from '@components/atoms/LargeButton';

import { useStore } from '@shared/store';

export default function Test() {
  const { selectContent, setSelectContent } = useStore();

  return (
    <div>
      <DefaultButton />
      <br />
      <LargeButton />
    </div>
  );
}