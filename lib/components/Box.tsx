import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Direction = "top" | "right" | "bottom" | "left";

type DirectionList = Direction[];

type SpacingDirectionMap = { [key in Direction]?: number };

interface Props {
  children: ReactNode;
  className?: string,
  border?: DirectionList;
  margin?: SpacingDirectionMap;
  padding?: SpacingDirectionMap;
  textAlign?: string;
}

interface WrapperProps {
  border: DirectionList;
  margin: SpacingDirectionMap;
  padding: SpacingDirectionMap;
  textAlign?: string;
}

const hasDirection = (directionList: DirectionList, direction: Direction) => directionList.includes(direction);

function getBorderDefs(borderDirectionList: DirectionList) {
  return css`
    ${hasDirection(borderDirectionList, 'top') && css`
      border-top: 2px solid ${props => props.theme.primary.palette.borderColor};
    `};

    ${hasDirection(borderDirectionList, 'right') && css`
      border-right: 2px solid ${props => props.theme.primary.palette.borderColor};
    `};

    ${hasDirection(borderDirectionList, 'bottom') && css`
      border-bottom: 2px solid ${props => props.theme.primary.palette.borderColor};
    `};

    ${hasDirection(borderDirectionList, 'left') && css`
      border-left: 2px solid ${props => props.theme.primary.palette.borderColor};
    `};
  `;
}

function getSpacingDef(spacingDirectionMap: SpacingDirectionMap, direction: Direction, spacingProperty: string) {
  if (!spacingDirectionMap[direction]) {
    return "";
  }

  const directionIndex = spacingDirectionMap[direction];

  if (!directionIndex) {
    return "";
  }

  return css`${props => `${spacingProperty}-${direction}: ${props.theme.spacing[directionIndex]};`}`;
}

function getSpacingDefs(spacingDirectionMap: SpacingDirectionMap, spacingProperty: string) {
  return css`
    ${getSpacingDef(spacingDirectionMap, "top", spacingProperty)}
    ${getSpacingDef(spacingDirectionMap, "right", spacingProperty)}
    ${getSpacingDef(spacingDirectionMap, "bottom", spacingProperty)}
    ${getSpacingDef(spacingDirectionMap, "left", spacingProperty)}
`;
}

function getMarginDefs(spacingDirectionMap: SpacingDirectionMap) {
  return getSpacingDefs(spacingDirectionMap, 'margin');
}

function getPaddingDefs(spacingDirectionMap: SpacingDirectionMap) {
  return getSpacingDefs(spacingDirectionMap, 'padding');
}

const Wrapper = styled.div<WrapperProps>`
  ${props => getBorderDefs(props.border)}
  ${props => getMarginDefs(props.margin)}
  ${props => getPaddingDefs(props.padding)}
`;

export default function Box({
  className,
  border = [],
  margin = {},
  padding = {},
  children
}: Props) {
  return (
    <Wrapper
      className={className}
      border={border}
      margin={margin}
      padding={padding}
    >
      {children}
    </Wrapper>
  );
}