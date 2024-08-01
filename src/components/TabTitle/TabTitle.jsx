import PropTypes from "prop-types";
import * as S from "./TabTitleStyle";

export default function TabTitle({ titles, showCheckBox, styles }) {
  return (
    <>
      <S.Wrapper>
        {showCheckBox && <S.CheckBox type="checkbox" />}
        {titles.map((title, index) => (
          <S.TabTitleItem key={index} style={styles[index] || []}>
            {title}
          </S.TabTitleItem>
        ))}
      </S.Wrapper>
    </>
  );
}

TabTitle.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  showCheckBox: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.object),
};
