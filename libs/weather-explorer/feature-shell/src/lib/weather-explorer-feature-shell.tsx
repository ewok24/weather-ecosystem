import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WeatherExplorerFeatureShellProps {}

const StyledWeatherExplorerFeatureShell = styled.div`
  color: pink;
`;

export function WeatherExplorerFeatureShell(
  props: WeatherExplorerFeatureShellProps
) {
  return (
    <StyledWeatherExplorerFeatureShell>
      <h1>Welcome to WeatherExplorerFeatureShell!</h1>
    </StyledWeatherExplorerFeatureShell>
  );
}

export default WeatherExplorerFeatureShell;
