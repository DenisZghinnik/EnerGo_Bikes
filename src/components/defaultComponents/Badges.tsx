import {Badge} from "@material-ui/core";
import styled, {css} from "styled-components";

const StyledBadge = css`&&{
    .MuiBadge-badge{
      color: #fff;
      border-radius: 0;
      height: auto;
      padding: 4px 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      font-size: 10px;
      top: -10px;
      right: auto;
      left: 0;
      &:after{
        content: '';
        position: absolute;
        bottom: -6px;
        left: 10px;
        width: 6px;
        height: 6px;
      }
    }
}`

export const HotBadge = styled(Badge)`&&{
  ${StyledBadge};
  .MuiBadge-badge{
    background-color: #dd3333;
    &:after{
      background: linear-gradient(135deg, #dd3333 50%, #fff 50%);
    }
  }
}`

export const NewBadge = styled(Badge)`&&{
  ${StyledBadge};
  .MuiBadge-badge{
    background-color: #83b735;
    &:after{
      background: linear-gradient(135deg, #83b735 50%, #fff 50%);
    }
  }
}`