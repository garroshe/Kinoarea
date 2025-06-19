import {Logo} from "../Logo/Logo.tsx";
import {Social} from "../../../../shared/ui/Social/Social.tsx";
import {StyledHeader, StyledLeftBlock, StyledRightBlock} from "./styled.tsx";
import {NavBar} from "../NavBar/NavBar.tsx";
import {ButtonUI} from "../../../../shared/ui/ButtonUI/ButtonUI.tsx";
import {SearchUI} from "../../../../shared/ui/SearchUI/SearchUI.tsx";

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