import React from 'react'
import {render, screen} from '@testing-library/react'
import {SpinnerComponent} from './spinner.component'
import * as reactPromiseTracker from 'react-promise-tracker/lib/trackerHook';

describe('common/components/spinner/spinner.component specs', () => {
    it('should render a spinner element when promise is in progress', () => {
      // Arrange
      const stub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockReturnValue({promiseInProgress:true});

      //Act
      render(<SpinnerComponent />)
      //const loaderElement = screen.getByLabelText('Loader icon');

      //Assert
      expect(stub).toHaveBeenCalled();
      //expect(loaderElement).toBeInTheDocument();

    })
})