import {Logo} from "../Logo/Logo.tsx";
import {Social} from "../Social/Social.tsx";
import {StyledHeader, StyledLeftBlock, StyledRightBlock} from "./styled.tsx";
import {NavBar} from "../NavBar/NavBar.tsx";
import {ButtonUI} from "../../../../components/ui/ButtonUI/ButtonUI.tsx";
import {SearchUI} from "../../../../components/ui/SearchUI/SearchUI.tsx";

export const Header = () => {
    return (
        <div className="container">
            <StyledHeader>
                <StyledLeftBlock>
                    <Logo/>
                    <Social/>
                </StyledLeftBlock>
                <NavBar/>
                <StyledRightBlock>
                    <SearchUI/>
                    <ButtonUI>Увійти</ButtonUI>
                </StyledRightBlock>
            </StyledHeader>
        </div>
    )
}