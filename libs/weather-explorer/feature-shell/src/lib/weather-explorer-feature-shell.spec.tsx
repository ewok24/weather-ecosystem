import { render } from '@testing-library/react';

import WeatherExplorerFeatureShell from './weather-explorer-feature-shell';

describe('WeatherExplorerFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherExplorerFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
