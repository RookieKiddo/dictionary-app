import { mockAutocompleteWords } from './words.js';

export const autoCompleteSuggestions = (word) => {
    return Promise.resolve({
        results: mockAutocompleteWords.filter((_mockWord) => _mockWord.startsWith(word)),
    })
}