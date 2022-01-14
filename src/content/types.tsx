import BigTextBlock, { BigTextBlockProps } from '../components/BigTextBlock';
import TicketsBlock, { TicketsBlockProps } from '../components/TicketsBlock';
import Navbar, { NavBarProps } from '../components/Navbar';

export type BlockAndProps =
  {
    block: typeof TicketsBlock;
    props: TicketsBlockProps;
  }
  |
  {
    block: typeof BigTextBlock;
    props: BigTextBlockProps;
  }
  |
  {
    block: typeof Navbar;
    props: NavBarProps;
  }