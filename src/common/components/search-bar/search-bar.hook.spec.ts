import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSearchBar } from './search-bar.hook';
import { Lookup } from 'common/models';
import * as debonceHooks from 'common/hooks'

describe('useSearchBar specs', () => {
  it('should return search', () => {
    // Arrange
    const collection: Lookup[] = [
      {
        id: '1',
        name: 'name1',
      },
      {
        id: '2',
        name: 'name2',
      },
    ];
    const fields = [''];

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearchBar(collection, fields)
    );

    // Assert
    expect(result.current.filteredList).toEqual(collection);
  });

    it('should return filtered search', () => {
      // Arrange
      const collection: Lookup[] = [
        {
          id: '1',
          name: 'name1',
        },
        {
          id: '2',
          name: 'name2',
        },
      ];
      const fields = [''];

      /*const stub = jest.spyOn(debounceHook, 'deboncedSearch').
  
      // Act
      act(()=>{result.current.onSearch(fields)})
      const { result, waitForNextUpdate } = renderHook(() =>
        useSearchBar(collection, fields)
      );
  
      // Assert
      expect(result.current.filteredList).toEqual(collection);*/
    });
});
