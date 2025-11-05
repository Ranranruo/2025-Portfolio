import styled from "@emotion/styled";

export const SKILLS = ['html' 
,'css' 
,'javascript' 
,'typescript' 
,'java' 
,'python' 
,'php'
,'c'
,'svelte'
,'react' 
,'electron'
,'lynx'
,'threejs' 
,'nodejs' 
,'express'
,'laravel'
,'springboot'
,'fastapi'
,'flask'
,'mysql'
,'mongodb'
,'postgresql'
,'firebase'
,'supabase'
,'redis'
,'azure'
,'docker',
,'figma'
,'github'] as const;

export type Skills = typeof SKILLS[number];

interface SkillProps {
    name: typeof SKILLS[number];
    theme: 'light' | 'dark';
    size: number;
}

interface StyledSkillProps {
    size: number;
}

const StyledSkill = styled.img<StyledSkillProps>`
    width: ${(props) => props.size}px;
    background-size: cover;
    background-position: center;
`;

const Skill = ({
    name,
    theme,
    size = 50
}: SkillProps) => {
    return (
        <StyledSkill
            src={`/image/skill/${name}.png`}
            size={size}
        />
    )
}
export default Skill;
