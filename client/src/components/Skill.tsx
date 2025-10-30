import styled from "@emotion/styled";

type SkillNames = 'html' 
| 'css' 
| 'javascript' 
| 'typescript' 
| 'java' 
| 'python' 
| 'php'
| 'c'
| 'svelte'
| 'react' 
| 'electron'
| 'lynx'
| 'threejs' 
| 'nodejs' 
| 'express'
| 'laravel'
| 'springboot'
| 'fastapi'
| 'flask'
| 'mysql'
| 'mongodb'
| 'postgresql'
| 'firebase'
| 'superbase'
| 'redis'
| 'azure'
| 'docker'


interface SkillProps {
    name: SkillNames;
    theme: 'light' | 'dark';
    size: number;
}

interface StyledSkillProps {
    size: number;
}

const StyledSkill = styled.img<StyledSkillProps>`
    
`;

const Skill = ({
    name,
    theme,
    size = 50
}: SkillProps) => {
    return (
        <StyledSkill
            src={`image/skill/${name}.png`}
            size={size}
        />
    )
}
export default Skill;